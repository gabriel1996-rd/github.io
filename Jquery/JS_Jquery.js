$(document).ready(function() {
            // 1. Cambiar imagen al pasar el mouse
            $("#cambiarImagen").hover(
                function() {
                    // Al entrar el mouse
                    $(this).attr("src", "elpadrino.jpg");
                },
                function() {
                    // Al salir el mouse
                    $(this).attr("src", "pulpfiction.jpg");
                }
            );
            
            // 2. Cambiar color al hacer click
            $("#btnCambiarColor").click(function() {
                const colors = [
                    "linear-gradient(45deg, #ff9966, #ff5e62)",
                    "linear-gradient(45deg, #11998e, #38ef7d)",
                    "linear-gradient(45deg, #4d9de0, #3a86d9)",
                    "linear-gradient(45deg, #e1306c, #c13584)",
                    "linear-gradient(45deg, #ffd700, #ff9d00)"
                ];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                $("#cambiarColor")
                    .css("background", randomColor)
                    .text("¡Color cambiado!");
            });
            
            $("#btnResetColor").click(function() {
                $("#cambiarColor")
                    .css("background", "linear-gradient(45deg, #ff9966, #ff5e62)")
                    .text("Haz clic en el botón para cambiar mi color");
            });
            
            // 3. Modificar texto al hacer click
            $("#btnTexto1").click(function() {
                $("#modificarTexto").html("<strong>Acción:</strong> Las películas de acción son conocidas por sus emocionantes escenas de lucha, persecuciones y explosiones. Este género mantiene a los espectadores al borde de sus asientos con una narrativa rápida y efectos visuales impactantes.");
            });
            
            $("#btnTexto2").click(function() {
                $("#modificarTexto").html("<strong>Comedia:</strong> El género de comedia busca entretener y provocar risa en la audiencia. A través de situaciones humorísticas, diálogos ingeniosos y personajes excéntricos, estas películas ofrecen un escape ligero y divertido del día a día.");
            });
            
            $("#btnTextoOriginal").click(function() {
                $("#modificarTexto").text("Este es el texto original. Haz clic en los botones para modificarlo.");
            });
            
            // 4. Animación al hacer click
            function animarElemento() {
                $("#animarElemento")
                    .animate({left: '100px'}, 500)
                    .animate({top: '50px'}, 500)
                    .animate({width: '200px', height: '200px'}, 500)
                    .animate({left: '0', top: '0', width: '120px', height: '120px'}, 800)
                    .css("background", "linear-gradient(45deg, #ff5e62, #ff9966)");
            }
            
            $("#btnAnimar").click(animarElemento);
            $("#animarElemento").click(animarElemento);
            
            $("#btnResetAnimacion").click(function() {
                $("#animarElemento")
                    .stop(true)
                    .css({
                        left: '0', 
                        top: '0', 
                        width: '120px', 
                        height: '120px',
                        background: "linear-gradient(45deg, #41b883, #2c7d5a)"
                    });
            });
            
            // 5. Ocultar elemento al hacer click sobre él
            $("#ocultarElemento").click(function() {
                $(this).fadeOut(1000);
            });
            
            $("#btnMostrar").click(function() {
                $("#ocultarElemento").fadeIn(800);
            });
        });