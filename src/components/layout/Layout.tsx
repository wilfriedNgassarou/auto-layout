import { useState } from "react"
import Logo from "../logo/Logo";

export default function Layout() {
  const [size, setSize] = useState<'small' | 'medium' | 'big'>('medium')

  function handleChangeSize() {
    switch (size) {
      case 'small':
        setSize('medium')
        break;
        
      case 'medium':
        setSize('big')
        break;

      case 'big':
        setSize('small')
        break;
    
      default:
        setSize('medium')
        break;
    }
  }

  return (
    <section 
      className={`layout layout-${size}`}
      onClick={handleChangeSize}
    >
      <div className="layout-header">
        <img src="/background.png" className="layout-header-background" alt="" />
        <div className="layout-header-center">
          <div className="layout-header-logo-container">
            <Logo />
          </div>
          <div className="layout-header-text">
            <h3>Emani.Ui</h3>
            <h5>Product Designer</h5>
          </div>
        </div>

      </div>
      <div className="layout-body">
        <h1>
          Auto-layout Interaction
          <div className="details">
            <div>
              <span>www.config.com</span>
              <span className="wrapper">
                <span className="wrapper-2">
                  <span>
                    Last update 2024
                  </span>
                </span>
              </span>
            </div>
          </div>
        </h1>
      </div>
      <div className="layout-footer">
        <article>
          <div>
            <img src="/left.png" alt="" />
          </div>
        </article>
        <article>
          <div>
            <img src="/middle.png" alt="" />
          </div>
        </article>
        <article>
          <div>
            <img src="/right.png" alt="" />
          </div>
        </article>
      </div>
    </section>
  )
}