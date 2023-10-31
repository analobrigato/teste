import HeaderProps from "@/components/HeaderProps";

function Home() {
    return (
        <div>
            <div>Página Home</div>

            <HeaderProps pedido="🍕 pizza" sobremesa="🍦 sorvete" />
            <HeaderProps pedido="🍔 lanche" sobremesa="🎂 bolo" />

        </div>
    )
}

export default Home;