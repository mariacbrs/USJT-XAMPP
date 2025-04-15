// pages/Login.tsx
export function Login() {
    return (
        <section className="loginP">
            <form action="">
                <div className="Iwrap">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="test@gmail.com" />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Your Name" />
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}