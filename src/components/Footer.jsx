
export default function Footer() {


  return (

    <section className="footer-section">

      <footer className="footer py-12">
        <small className="text-muted mb-2">
          <i className="fas fa-code"></i>  with  <i className="fas fa-heart"></i>  by  <strong>Lesley Chang</strong>
        </small>
        <div className="social-links flex justify-center mt-2">
          <a href="https://www.linkedin.com/in/leschang" target="_blank" className="duration-300 ease-in">
            <i className="fab fa-linkedin" style={{ fontSize: '22px' }}> </i>
          </a>
          <a href="mailto:lesleycch@gmail.com" className="ml-4 duration-300 ease-in"><i className="fas fa-envelope" style={{ fontSize: '22px' }}> </i></a>
          <a href="https://github.com/lesleycch" target="_blank" className="ml-4 duration-300 ease-in"><i className="fab fa-github" style={{ fontSize: '22px' }}> </i></a>
        </div>
      </footer>

    </section>
    
  );
}