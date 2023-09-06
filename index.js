const d = document;
const $inputNumber= d.getElementById("input--number");
const $btnEnviar= d.getElementById("btn--enviar");
const $cardContainer= d.getElementById("container--card");
const $inputMsj = d.querySelector (".contenedor--input small")


const ObtenerDatos= async (id)=>{
    try {
        const respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await respuesta.json();
        return data;        
    } catch (error) {
         $inputMsj.textContent =error;
    }
}

const enviarNumero= async ()=>{   
    $cardContainer.classList.remove("container--card__activo")
    if($inputNumber.value=="")
    {
        $inputMsj.textContent = "Debe ingresar un numero"; return;
    }    
    const dataPokemon = await ObtenerDatos($inputNumber.value);  
    if (dataPokemon) 
    {
    $inputMsj.textContent="";
    $cardContainer.classList.add("container--card__activo")
    const tipos = dataPokemon.types.map((e)=>e.type.name);       
    $cardContainer.innerHTML = `<h1> ${dataPokemon.name.toUpperCase()}</h1>
    <span>Tipos: ${tipos.join(",")} </span>
    <span>Peso: ${dataPokemon.weight/10} Kg </span>
    <span>Altura: ${dataPokemon.height/10} Metros</span>
    <img src="${dataPokemon.sprites.back_default} " alt="">`
}

}

$btnEnviar.onclick = enviarNumero;



