const reasons = [
    "Eres mí Princesa.",
    "Me encanta tu voz suave y suave, especialmente cuando me dices que me amas.",
    "Me gusta cómo eres espontánea y siempre estás dispuesta a hacer algo divertido.",
    "Princesa siempre tiene tiempo para mí, incluso cuando está ocupada.",
    "Siempre estás ahí para mí.",
    "Por la forma en que me haces reír.",
    "Me aceptas tal como soy.",
    "Eres mi hogar.",
    "Porque me haces una mejor persona.",
    "Anahi eres muy cariñosa y siempre me haces sentir amado.",
    "Me gusta cómo siempre tienes un plan para nuestro futuro juntos",
    "Eres mi inspiración",
    "Juntos podemos superar cualquier obstáculo.",
    "Eres la razón por la que me despierto con una sonrisa todos los días.",
    "Porque me haces sentir amado.",
    "Me siento seguro y amado cuando estas conmigo.",
    "Estar contigo es sentirme como en casa.",
    "Aprecio cómo siempre me apoyas en mis sueños y metas, incluso cuando son difíciles de alcanzar.",
    "Por lo fuerte que hemos sido siempre.",
    "Por como actuas como niña pequeña al estar conmigo",
    "Por como cuando necesitas apoyo me buscas",
    "A pesar de que hemos tenido errores estamos dispuestos a cmbiar para no perder al otro",
    "Cuando me llamas diciendo que te hable para que puedas dormir",
    


];

let usedReasons = [];

const reasonBtn = document.getElementById("reason-btn");
const reasonEl = document.getElementById("reason");


reasonBtn.addEventListener("click", () => {
    let reason = "";
    
    if (usedReasons.length === reasons.length) {
    usedReasons = [];
    }
    
    do {
      reason = reasons[Math.floor(Math.random() * reasons.length)];
    } while (usedReasons.includes(reason));
    
    usedReasons.push(reason);
    reasonEl.textContent = reason;

});