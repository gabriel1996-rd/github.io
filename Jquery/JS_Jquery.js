$(document).ready(function() {
            // 1. Cambiar imagen al pasar el mouse
$("#cambiarImagen").hover(
    function() {
                    
        $(this).attr("src", "elpadrino.jpg");
    },
    function() {
                    
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
});
            
$("#btnResetColor").click(function() {
    $("#cambiarColor")
        .css("background", "linear-gradient(45deg, #ff9966, #ff5e62)")
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
$("#btnPulse").click(function() {
    $("#animarElemento img")
        .addClass("pulse")
        .on('animationend', function() {
            $(this).removeClass("pulse");
        });
});

$("#btnRotate").click(function() {
    $("#animarElemento img")
        .addClass("rotate")
        .on('animationend', function() {
            $(this).removeClass("rotate");
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