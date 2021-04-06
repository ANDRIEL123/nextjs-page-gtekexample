import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const ImgComponent = (props) => {
  return (
    <a href="">
      <Image
        src={props.file} // Route of the image file
        height={props.height} // Desired size with correct aspect ratio
        width={props.width} // Desired size with correct aspect ratio
        alt="Your photo"
      />
    </a>
  )
}

export default function Home() {
  return (
    <div className="container">
      < ImgComponent file="/images/logo.png" height="106" width="300" />
      <Head>
        <title>Gtek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="infos">
          <h3>
            <p className="dominio-tr">Revenda Autorizada Domínio
            {''}<br></br>< ImgComponent file="/images/tr-img2.png" height="46" width="52" />
              {' '} <br></br>THOMSON REUTERS</p>
          </h3>
        </div>


        <p className="description">
          Para conhecer mais, acesse a <a href="https://www.dominiosistemas.com.br/" target="_blank">Página</a>
        </p>

        <div className="grid">
          <a href="" className="card">
            <h3>Nosso produtos &rarr;</h3>
            <p>Conheça mais sobre nossos produtos.</p>
          </a>

          <a href="" className="card">
            <h3>Nossos serviços &rarr;</h3>
            <p>Conheça mais sobre nossos serviços.</p>
          </a>

          <a
            href=""
            className="card"
          >
            <h3>Equipe &rarr;</h3>
            <p>Conheça mais sobre a nossa equipe</p>
          </a>

          <a
            href=""
            className="card"
          >
            <h3>Sobre nós &rarr;</h3>
            <p>
              Saiba mais sobre a equipe GTEK SM
            </p>
          </a>
        </div>
      </main>

      <footer>
        <p>Powered by <b className="powered">Gtek SM</b></p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }
        
        .infos {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
        }

        p {
          text-align: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        p {
          color: white;
        }

        a {
          color: rgb(255, 40, 0);
          text-decoration: none;
        }

        b {
          color: rgb(255, 40, 0);
        }

        h3 {
          color: rgb(255, 40, 0);
        }

        h3:hover {
          color: rgb(255, 40, 0);
        }

        .title a {
          color: rgb(255, 40, 0);
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: rgb(255, 60, 0);
          border-color: rgb(255, 40, 0);
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }
        

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
