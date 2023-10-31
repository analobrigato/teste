import batatinhaFrita from "../aula/estilo.module.css";

export default function EstiloIntegrado() {
    return (
    <>
        <div id={batatinhaFrita.integracaoComId}>
        <div className={batatinhaFrita.azul}>#01 Texto com estilo integrado</div>
        <div className={batatinhaFrita.verde}>#02 Texto com estilo integrado</div>
        <div className={batatinhaFrita.vermelho}>#03 Texto com estilo integrado</div>
        <div>#04 Texto com estilo integrado</div>
        </div>
    </>
    );

}