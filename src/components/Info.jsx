function Info() {
    return (
        <>
            <header>
                <img className='portrait' src='/src/assets/portrait.jpeg' alt='Portrait of Cheryl' />
                <div className='info'>
                    <h1>Cheryl Mok</h1>
                    <h2 className='title'>Fullstack Engineer</h2>
                    <h3>cm.cherylmok@gmail.com</h3>
                    <div className='btn-container'>
                        <button className='btn'>
                            <i class="fa-solid fa-envelope"></i>
                            Email
                        </button>
                        <button className='btn linkedin-btn'>
                            <i class="fa-brands fa-linkedin"></i>
                            LinkedIn
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Info
