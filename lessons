<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lecciones del Curso — Create Your Glow</title>
    
    <!-- Google Fonts & FontAwesome -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- SDKs de Firebase (Versión Compat) -->
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js"></script>

    <!-- Inicialización de Firebase con tus credenciales reales -->
    <script>
        const firebaseConfig = {
            apiKey: "AIzaSyCR724EP9rNkKtETG1xM_CGSQ1ZIHhbOhc",
            authDomain: "create-your-glow.firebaseapp.com",
            projectId: "create-your-glow",
            storageBucket: "create-your-glow.firebasestorage.app",
            messagingSenderId: "917183846981",
            appId: "1:917183846981:web:214a14dbefdbdcc017612c"
        };

        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.firestore();
    </script>

    <style>
        :root {
            --bg-light: #FFF8F9;
            --bg-surface: #FFFFFF;
            --bg-blush: #FCE8EC;
            --text-dark: #18181B;
            --text-muted: #52525B;
            --pink-primary: #E91E63;
            --pink-dark: #C2185B;
            --violet-glow: #8B5CF6;
            --success-green: #10B981;
            --grad-glam: linear-gradient(135deg, #FF6B8B 0%, #8B5CF6 100%);
            --card-shadow: 0 12px 35px rgba(24, 24, 27, 0.08);
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-dark);
            display: flex;
            min-height: 100vh;
        }

        /* BARRA LATERAL */
        aside {
            width: 380px;
            background-color: var(--bg-surface);
            border-right: 2px solid var(--bg-blush);
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100vh;
            overflow-y: auto;
            z-index: 100;
        }

        .sidebar-header {
            padding: 1.8rem;
            border-bottom: 2px solid var(--bg-blush);
            background: var(--bg-light);
        }

        .sidebar-header a {
            text-decoration: none;
            color: var(--text-muted);
            font-size: 0.85rem;
            font-weight: 700;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 1rem;
            transition: var(--transition);
        }

        .sidebar-header a:hover {
            color: var(--pink-primary);
        }

        .sidebar-header h2 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--text-dark);
            margin-bottom: 1rem;
        }

        .progress-box {
            background: #FFFFFF;
            padding: 1rem;
            border-radius: 14px;
            border: 1px solid var(--bg-blush);
            margin-top: 0.5rem;
        }

        .progress-info-text {
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--text-muted);
            margin-bottom: 6px;
        }

        .progress-track {
            width: 100%;
            height: 8px;
            background-color: #F1F1F5;
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-bar-fill {
            height: 100%;
            background: var(--grad-glam);
            width: 0%;
            transition: width 0.4s ease;
        }

        .modules-list {
            padding: 1.2rem;
            list-style: none;
        }

        .module-item {
            margin-bottom: 1.5rem;
        }

        .module-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.95rem;
            font-weight: 800;
            color: var(--text-dark);
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .lessons-list {
            list-style: none;
            padding-left: 1rem;
            border-left: 2px dashed var(--bg-blush);
            margin-left: 6px;
        }

        .lesson-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.8rem 1rem;
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 12px;
            transition: var(--transition);
            margin-bottom: 6px;
        }

        .lesson-link:hover {
            background-color: var(--bg-blush);
            color: var(--pink-primary);
        }

        .lesson-link.active {
            background-color: var(--bg-blush);
            color: var(--pink-primary);
            font-weight: 800;
            box-shadow: 0 4px 15px rgba(233, 30, 99, 0.1);
        }

        .lesson-link.completed i.fa-circle-check {
            color: var(--success-green);
        }

        /* CONTENIDO PRINCIPAL */
        main {
            margin-left: 380px;
            flex-grow: 1;
            padding: 3rem;
            max-width: calc(100% - 380px);
        }

        .video-wrapper {
            width: 100%;
            aspect-ratio: 16/9;
            background-color: #09090B;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            border: 4px solid var(--bg-surface);
        }

        .video-wrapper iframe, .video-wrapper video {
            width: 100%;
            height: 100%;
            border: none;
        }

        /* SECCIÓN DE TABS E INTERACTIVIDAD */
        .lesson-interactive-container {
            background: var(--bg-surface);
            padding: 2.5rem;
            border-radius: 24px;
            box-shadow: var(--card-shadow);
            border: 2px solid var(--bg-blush);
        }

        .lesson-header-flex {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1.5rem;
            flex-wrap: wrap;
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 2px solid var(--bg-light);
        }

        .lesson-text-content h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.7rem;
            font-weight: 900;
            margin-bottom: 0.6rem;
            color: var(--text-dark);
        }

        .btn-complete {
            background: var(--bg-light);
            border: 2.5px solid var(--violet-glow);
            color: var(--violet-glow);
            padding: 0.8rem 1.6rem;
            border-radius: 50px;
            font-weight: 800;
            font-size: 0.9rem;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: var(--transition);
            white-space: nowrap;
        }

        .btn-complete:hover {
            background: var(--violet-glow);
            color: #FFFFFF;
            box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
            transform: translateY(-2px);
        }

        .btn-complete.done {
            background: var(--success-green);
            border-color: var(--success-green);
            color: #FFFFFF;
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
        }

        /* PESTAÑAS (TABS) */
        .tabs-nav {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid var(--bg-blush);
            padding-bottom: 0.5rem;
        }

        .tab-btn {
            background: transparent;
            border: none;
            font-size: 1rem;
            font-weight: 700;
            color: var(--text-muted);
            padding: 0.5rem 1rem;
            cursor: pointer;
            border-radius: 10px;
            transition: var(--transition);
        }

        .tab-btn.active {
            background: var(--bg-blush);
            color: var(--pink-primary);
        }

        .tab-content {
            display: none;
            color: var(--text-muted);
            font-size: 1rem;
            line-height: 1.7;
        }

        .tab-content.active {
            display: block;
        }

        /* CAJA DE COMENTARIOS */
        .comments-section textarea {
            width: 100%;
            padding: 1rem;
            border: 2px solid var(--bg-blush);
            border-radius: 14px;
            outline: none;
            font-size: 0.95rem;
            resize: vertical;
            margin-bottom: 1rem;
            transition: var(--transition);
        }

        .comments-section textarea:focus {
            border-color: var(--pink-primary);
        }

        .btn-comment {
            background: var(--pink-primary);
            color: white;
            border: none;
            padding: 0.7rem 1.5rem;
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            transition: var(--transition);
        }

        .btn-comment:hover {
            background: var(--pink-dark);
        }

        .comment-list {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .comment-card {
            background: var(--bg-light);
            padding: 1rem 1.2rem;
            border-radius: 12px;
            border: 1px solid var(--bg-blush);
        }

        .comment-user {
            font-weight: 700;
            color: var(--text-dark);
            font-size: 0.9rem;
            margin-bottom: 4px;
        }

        /* RESPONSIVO */
        @media (max-width: 900px) {
            aside {
                width: 100%;
                height: auto;
                position: relative;
            }
            main {
                margin-left: 0;
                max-width: 100%;
                padding: 1.5rem;
            }
            body {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>

    <!-- BARRA LATERAL -->
    <aside>
        <div class="sidebar-header">
            <a href="mis-cursos.html"><i class="fa-solid fa-arrow-left"></i> Volver a Mis Cursos</a>
            <h2 id="courseTitleHeader">Cargando curso...</h2>
            
            <div class="progress-box">
                <div class="progress-info-text">
                    <span>Progreso del Curso</span>
                    <span id="progressPercentageText">0%</span>
                </div>
                <div class="progress-track">
                    <div class="progress-bar-fill" id="progressBarFill"></div>
                </div>
            </div>
        </div>

        <div id="modulesContainer" class="modules-list">
            <p style="padding: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                <i class="fa-solid fa-spinner fa-spin"></i> Sincronizando módulos...
            </p>
        </div>
    </aside>

    <!-- CONTENIDO PRINCIPAL -->
    <main>
        <div class="video-wrapper" id="videoContainer">
            <div style="text-align: center; padding: 2rem;">
                <i class="fa-solid fa-clapperboard" style="font-size: 3.5rem; margin-bottom: 1rem; color: var(--violet-glow);"></i>
                <h3 style="font-family: 'Montserrat'; font-weight: 800;">Selecciona una lección</h3>
                <p style="color: #A1A1AA; font-size: 0.95rem; margin-top: 5px;">Elige un tema en la barra lateral para iniciar la reproducción.</p>
            </div>
        </div>

        <div class="lesson-interactive-container">
            <div class="lesson-header-flex">
                <div class="lesson-text-content">
                    <h1 id="lessonTitle">Bienvenida al Programa ✨</h1>
                </div>
                
                <button id="completeBtn" class="btn-complete" onclick="toggleCompletarLeccion()" style="display: none;">
                    <i class="fa-solid fa-circle-check"></i> Marcar como Completada
                </button>
            </div>

            <!-- PESTAÑAS INTERACTIVAS -->
            <div class="tabs-nav">
                <button class="tab-btn active" onclick="cambiarTab(event, 'tabApuntes')">📝 Apuntes</button>
                <button class="tab-btn" onclick="cambiarTab(event, 'tabRecursos')">📁 Recursos y Materiales</button>
                <button class="tab-btn" onclick="cambiarTab(event, 'tabDudas')">💬 Dudas de la Clase</button>
            </div>

            <!-- TAB 1: APUNTES -->
            <div id="tabApuntes" class="tab-content active">
                <p id="lessonDescription">Prepárate para aprender paso a paso todas las técnicas profesionales de belleza y marketing digital.</p>
            </div>

            <!-- TAB 2: RECURSOS -->
            <div id="tabRecursos" class="tab-content">
                <p>📥 Descarga los materiales complementarios para esta clase:</p>
                <ul style="margin-top: 10px; padding-left: 20px;" id="recursosList">
                    <li><a href="#" id="materialLink" style="color: var(--pink-primary); font-weight: 700; text-decoration: none;" target="_blank">Guía en PDF o material de la lección</a></li>
                </ul>
            </div>

            <!-- TAB 3: DUDAS Y COMENTARIOS -->
            <div id="tabDudas" class="tab-content comments-section">
                <p style="margin-bottom: 10px;">¿Tienes alguna pregunta sobre esta lección? Déjala aquí para que el equipo o la instructora te respondan.</p>
                <textarea id="commentInput" rows="3" placeholder="Escribe tu duda o comentario..."></textarea>
                <button class="btn-comment" onclick="enviarComentario()">Publicar Comentario 🚀</button>
                
                <div class="comment-list" id="commentListContainer">
                    <div class="comment-card">
                        <div class="comment-user">Comunidad Create Your Glow</div>
                        <p style="font-size: 0.9rem;">¡Bienvenida a la clase! Usa esta sección para interactuar.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- LÓGICA JAVASCRIPT UNIFICADA Y ROBUSTA -->
    <script>
        const urlParams = new URLSearchParams(window.location.search);
        const courseName = urlParams.get('nombre');

        let currentUser = null;
        let currentCourseId = null;
        let inscripcionDocId = null;
        let leccionesCompletadasIds = [];
        let totalLeccionesCurso = 0;
        let leccionActualId = null;
        let userNameLocal = "Estudiante";

        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                window.location.href = "auth.html";
                return;
            }
            currentUser = user;

            try {
                const userDoc = await db.collection("users").doc(user.uid).get();
                if(userDoc.exists && userDoc.data().name) {
                    userNameLocal = userDoc.data().name;
                }
            } catch (e) {
                console.log("Aviso: No se pudo cargar perfil de usuario", e);
            }

            if (courseName) {
                await cargarEstructuraCurso(courseName);
            } else {
                document.getElementById('courseTitleHeader').innerText = "Curso no especificado";
                document.getElementById('modulesContainer').innerHTML = `<p style="padding: 1rem; color: var(--text-muted); font-size: 0.9rem;">No se indicó ningún curso.</p>`;
            }
        });

        async function cargarEstructuraCurso(nombreCurso) {
            try {
                const coursesSnapshot = await db.collection("courses")
                    .where("title", "==", nombreCurso)
                    .get();

                if (coursesSnapshot.empty) {
                    document.getElementById('courseTitleHeader').innerText = "Curso no encontrado";
                    document.getElementById('modulesContainer').innerHTML = `<p style="padding: 1rem; color: var(--text-muted); font-size: 0.9rem;">El curso no existe en la base de datos.</p>`;
                    return;
                }

                const courseDoc = coursesSnapshot.docs[0];
                currentCourseId = courseDoc.id;
                document.getElementById('courseTitleHeader').innerText = courseDoc.data().title;

                await sincronizarInscripcionEstudiante();

                const modulesSnapshot = await db.collection("modules")
                    .where("courseId", "==", currentCourseId)
                    .get();

                const container = document.getElementById('modulesContainer');
                container.innerHTML = '';

                if (modulesSnapshot.empty) {
                    container.innerHTML = `<p style="padding: 1rem; color: var(--text-muted); font-size: 0.9rem;">Próximamente se agregarán módulos.</p>`;
                    return;
                }

                let totalCount = 0;
                for (const modDoc of modulesSnapshot.docs) {
                    const lessonsSnap = await db.collection("lessons").where("moduleId", "==", modDoc.id).get();
                    totalCount += lessonsSnap.size;
                }
                totalLeccionesCurso = totalCount;

                for (const modDoc of modulesSnapshot.docs) {
                    const modData = modDoc.data();
                    const modElement = document.createElement('div');
                    modElement.className = 'module-item';
                    modElement.innerHTML = `
                        <div class="module-title">
                            <i class="fa-solid fa-folder-open" style="color: var(--violet-glow);"></i> 
                            ${modData.title || 'Módulo'}
                        </div>
                        <ul class="lessons-list" id="lessons-${modDoc.id}"></ul>
                    `;
                    container.appendChild(modElement);

                    await cargarLeccionesDeModulo(modDoc.id, `lessons-${modDoc.id}`);
                }

                actualizarBarraProgresoVisual();

            } catch (error) {
                console.error("Error al cargar estructura:", error);
            }
        }

        async function sincronizarInscripcionEstudiante() {
            try {
                const enrSnap = await db.collection("inscripciones")
                    .where("userId", "==", currentUser.uid)
                    .where("courseTitle", "==", courseName)
                    .get();

                if (!enrSnap.empty) {
                    inscripcionDocId = enrSnap.docs[0].id;
                    const data = enrSnap.docs[0].data();
                    leccionesCompletadasIds = data.leccionesCompletadas || [];
                }
            } catch (error) {
                console.error("Error al sincronizar inscripción:", error);
            }
        }

        async function cargarLeccionesDeModulo(moduleId, containerId) {
            const lessonsContainer = document.getElementById(containerId);
            try {
                const lessonsSnapshot = await db.collection("lessons")
                    .where("moduleId", "==", moduleId)
                    .get();

                if (lessonsSnapshot.empty) {
                    lessonsContainer.innerHTML = `<li style="font-size: 0.85rem; color: var(--text-muted); padding: 6px 1rem;">Sin lecciones</li>`;
                    return;
                }

                lessonsSnapshot.forEach((lessonDoc) => {
                    const lessonId = lessonDoc.id;
                    const lesson = lessonDoc.data();
                    const isCompleted = leccionesCompletadasIds.includes(lessonId);

                    const li = document.createElement('li');
                    li.innerHTML = `
                        <a href="javascript:void(0);" class="lesson-link ${isCompleted ? 'completed' : ''}" id="link-${lessonId}" onclick="reproducirLeccion(this, '${lessonId}', '${encodeURIComponent(lesson.title || 'Clase')}', '${lesson.videoUrl || ''}', '${encodeURIComponent(lesson.content || '')}', '${lesson.materialUrl || ''}')">
                            <span style="display: flex; align-items: center; gap: 8px;">
                                <i class="fa-solid ${isCompleted ? 'fa-circle-check' : 'fa-circle-play'}"></i> 
                                ${lesson.title || 'Clase'}
                            </span>
                        </a>
                    `;
                    lessonsContainer.appendChild(li);
                });
            } catch (error) {
                console.error("Error al cargar lecciones:", error);
            }
        }

        function reproducirLeccion(element, lessonId, tituloEncoded, videoUrl, descripcionEncoded, materialUrl) {
            document.querySelectorAll('.lesson-link').forEach(el => el.classList.remove('active'));
            element.classList.add('active');

            leccionActualId = lessonId;
            const titulo = decodeURIComponent(tituloEncoded);
            const descripcion = decodeURIComponent(descripcionEncoded);

            document.getElementById('lessonTitle').innerText = titulo;
            document.getElementById('lessonDescription').innerText = descripcion || "Disfruta de esta clase y practica cada técnica paso a paso.";

            // Configurar enlace de recursos
            const materialLink = document.getElementById('materialLink');
            if (materialUrl) {
                materialLink.href = materialUrl;
                materialLink.innerText = "Descargar material de la lección";
                materialLink.style.display = "inline";
            } else {
                materialLink.href = "#";
                materialLink.innerText = "No hay materiales adicionales en esta clase";
            }

            const completeBtn = document.getElementById('completeBtn');
            completeBtn.style.display = 'inline-flex';

            if (leccionesCompletadasIds.includes(lessonId)) {
                completeBtn.className = 'btn-complete done';
                completeBtn.innerHTML = `<i class="fa-solid fa-check"></i> ¡Lección Completada!`;
            } else {
                completeBtn.className = 'btn-complete';
                completeBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Marcar como Completada`;
            }

            const videoContainer = document.getElementById('videoContainer');
            if (videoUrl) {
                let embedUrl = videoUrl;
                if (videoUrl.includes("youtube.com/watch?v=")) {
                    embedUrl = videoUrl.replace("watch?v=", "embed/");
                } else if (videoUrl.includes("youtu.be/")) {
                    embedUrl = videoUrl.replace("youtu.be/", "www.youtube.com/embed/");
                }
                videoContainer.innerHTML = `<iframe src="${embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else {
                videoContainer.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <i class="fa-solid fa-video-slash" style="font-size: 3rem; margin-bottom: 1rem; color: var(--pink-primary);"></i>
                        <h3>Video no disponible</h3>
                    </div>
                `;
            }

            cargarComentariosDeLeccion(lessonId);
        }

        async function toggleCompletarLeccion() {
            if (!leccionActualId || !inscripcionDocId) return;

            const completeBtn = document.getElementById('completeBtn');
            const linkElement = document.getElementById(`link-${leccionActualId}`);
            const index = leccionesCompletadasIds.indexOf(leccionActualId);

            if (index > -1) {
                leccionesCompletadasIds.splice(index, 1);
                completeBtn.className = 'btn-complete';
                completeBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Marcar como Completada`;
                if (linkElement) {
                    linkElement.classList.remove('completed');
                    linkElement.querySelector('i').className = 'fa-solid fa-circle-play';
                }
            } else {
                leccionesCompletadasIds.push(leccionActualId);
                completeBtn.className = 'btn-complete done';
                completeBtn.innerHTML = `<i class="fa-solid fa-check"></i> ¡Lección Completada!`;
                if (linkElement) {
                    linkElement.classList.add('completed');
                    linkElement.querySelector('i').className = 'fa-solid fa-circle-check';
                }
            }

            const nuevoProgreso = totalLeccionesCurso > 0 ? Math.round((leccionesCompletadasIds.length / totalLeccionesCurso) * 100) : 0;

            try {
                await db.collection("inscripciones").doc(inscripcionDocId).update({
                    leccionesCompletadas: leccionesCompletadasIds,
                    progreso: nuevoProgreso
                });
                actualizarBarraProgresoVisual();
            } catch (error) {
                console.error("Error al actualizar progreso:", error);
            }
        }

        function actualizarBarraProgresoVisual() {
            const porcentaje = totalLeccionesCurso > 0 ? Math.round((leccionesCompletadasIds.length / totalLeccionesCurso) * 100) : 0;
            document.getElementById('progressPercentageText').innerText = `${porcentaje}%`;
            document.getElementById('progressBarFill').style.width = `${porcentaje}%`;
        }

        function cambiarTab(evt, tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            evt.currentTarget.classList.add('active');
        }

        async function enviarComentario() {
            const texto = document.getElementById('commentInput').value.trim();
            if(!texto || !leccionActualId) return;

            try {
                await db.collection("comments").add({
                    lessonId: leccionActualId,
                    uid: currentUser.uid,
                    userName: userNameLocal,
                    text: texto,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });

                document.getElementById('commentInput').value = '';
                cargarComentariosDeLeccion(leccionActualId);
            } catch (error) {
                console.error("Error al enviar comentario:", error);
            }
        }

        async function cargarComentariosDeLeccion(lessonId) {
            const container = document.getElementById('commentListContainer');
            container.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted);">Cargando comentarios...</p>`;

            try {
                const snap = await db.collection("comments")
                    .where("lessonId", "==", lessonId)
                    .get();

                if(snap.empty) {
                    container.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-muted);">No hay dudas aún. ¡Sé la primera en comentar!</p>`;
                    return;
                }

                container.innerHTML = '';
                snap.docs.forEach(doc => {
                    const com = doc.data();
                    const card = document.createElement('div');
                    card.className = 'comment-card';
                    card.innerHTML = `
                        <div class="comment-user">${com.userName || 'Estudiante'}</div>
                        <p style="font-size: 0.9rem; color: var(--text-dark);">${com.text}</p>
                    `;
                    container.appendChild(card);
                });
            } catch (error) {
                console.error("Error al cargar comentarios:", error);
            }
        }
    </script>
</body>
</html>
