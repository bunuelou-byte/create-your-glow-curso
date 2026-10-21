import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, getDoc, collection, addTimestamp, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuración de Firebase (asegúrate de usar tu archivo de config o pegarla aquí)
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loadingAuth = document.getElementById("loading-auth");
const formLeccion = document.getElementById("form-leccion");
const unauthorized = document.getElementById("unauthorized");

// 1. Verificar autenticación y rol de administrador
onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            // Buscar el documento del usuario en Firestore para ver su rol
            const userDocRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userDocRef);

            if (userSnap.exists() && userSnap.data().role === "admin") {
                // ¡Eres tú, la tutora! Mostramos el formulario
                loadingAuth.style.display = "none";
                formLeccion.style.display = "block";
            } else {
                // Es un estudiante normal, se le niega el acceso
                loadingAuth.style.display = "none";
                unauthorized.style.display = "block";
            }
        } catch (error) {
            console.error("Error verificando rol:", error);
        }
    } else {
        // No ha iniciado sesión
        window.location.href = "login.html";
    }
});

// 2. Procesar el envío del formulario para guardar la lección en Firestore
formLeccion.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nuevaLeccion = {
        courseId: document.getElementById("courseId").value,
        moduleNumber: Number(document.getElementById("moduleNumber").value),
        moduleName: document.getElementById("moduleName").value,
        order: Number(document.getElementById("order").value),
        title: document.getElementById("title").value,
        videoUrl: document.getElementById("videoUrl").value,
        materialUrl: document.getElementById("materialUrl").value,
        content: document.getElementById("content").value,
        createdAt: new Date()
    };

    try {
        await addDoc(collection(db, "lessons"), nuevaLeccion);
        alert("¡Clase subida y publicada con éxito! 🎉");
        formLeccion.reset();
    } catch (error) {
        console.error("Error al guardar la lección:", error);
        alert("Hubo un error al subir la clase. Revisa la consola.");
    }
});
