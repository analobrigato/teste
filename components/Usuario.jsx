
export function UsuarioCadastrado(props) {

    if(props.nomeDoUsuario && props.emailDoUsuario) {
        return (
            <div>
                <h2> Usuário {props.nomeDoUsuario} cadastrado</h2>
                <p> EMAIL: {props.emailDoUsuario}</p>
            </div>
        );
    } else {
        return(
            <div>
                <h2>Usuário {props.textoDaFrase} não cadastrado</h2>
                <p>Email desconhecido</p>
            </div>
        );
    }
}