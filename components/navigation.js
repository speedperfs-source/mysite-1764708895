class CustomNavigation extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                .navigation {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    padding: 1rem 0;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                .nav-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #e11d48;
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-link {
                    color: #374151;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: #e11d48;
                }
                .cart-button {
                    position: relative;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #374151;
                }
                .cart-count {
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background: #e11d48;
                    color: white;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    font-size: 0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #374151;
                }
                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    border-top: 1px solid #e5e7eb;
                    padding: 1rem;
                }
                .mobile-nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-button {
                        display: block;
                    }
                    .mobile-menu.show {
                        display: block;
                    }
                }
                .icon {
                    width: 24px;
                    height: 24px;
                    stroke: currentColor;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    fill: none;
                }
            </style>
            <nav class="navigation">
                <div class="nav-container">
                    <div class="nav-content">
                        <a href="index.html" class="logo">
                            Lisseur Élégance
                        </a>
                        <div class="nav-links">
                            <a href="index.html" class="nav-link">Accueil</a>
                            <a href="produit.html" class="nav-link">Produit</a>
                            <a href="apropos.html" class="nav-link">À propos</a>
                            <a href="panier.html" class="cart-button">
                                <svg class="icon" viewBox="0 0 24 24">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                <span class="cart-count" id="cart-count">0</span>
                            </a>
                        </div>
                        <button class="mobile-menu-button" id="mobile-menu-button">
                            <svg class="icon" viewBox="0 0 24 24">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                        </button>
                    </div>
                    <div class="mobile-menu hidden" id="mobile-menu">
                        <div class="mobile-nav-links">
                            <a href="index.html" class="nav-link">Accueil</a>
                            <a href="produit.html" class="nav-link">Produit</a>
                            <a href="apropos.html" class="nav-link">À propos</a>
                            <a href="panier.html" class="nav-link">Panier</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navigation', CustomNavigation);