class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                .footer {
                    background: #111827;
                    color: white;
                    padding: 3rem 0 2rem;
                }
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                .footer-section h3 {
                    color: #e11d48;
                    margin-bottom: 1rem;
                    font-size: 1.125rem;
                }
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .footer-link {
                    color: #d1d5db;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .footer-link:hover {
                    color: #e11d48;
                }
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 2rem;
                    text-align: center;
                    color: #9ca3af;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .social-link {
                    color: #d1d5db;
                    transition: color 0.3s ease;
                }
                .social-link:hover {
                    color: #e11d48;
                }
                .icon {
                    width: 20px;
                    height: 20px;
                    stroke: currentColor;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    fill: none;
                }
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>Lisseur Élégance</h3>
                            <p>L'excellence dans le lissage capillaire. Des produits innovants pour une beauté rayonnante.</p>
                            <div class="social-links">
                                <a href="#" class="social-link">
                                    <svg class="icon" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#" class="social-link">
                                    <svg class="icon" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="#" class="social-link">
                                    <svg class="icon" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7 0 10.9 10.9 0 0 1-3 1.53 4.48 4.48 0 0 0-7 0A10.9 10.9 0 0 1 1 3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="footer-section">
                            <h3>Navigation</h3>
                            <div class="footer-links">
                                <a href="index.html" class="footer-link">Accueil</a>
                                <a href="produit.html" class="footer-link">Produit</a>
                                <a href="apropos.html" class="footer-link">À propos</a>
                                <a href="contact.html" class="footer-link">Contact</a>
                            </div>
                        </div>
                        <div class="footer-section">
                            <h3>Support</h3>
                            <div class="footer-links">
                                <a href="#" class="footer-link">FAQ</a>
                                <a href="#" class="footer-link">Livraison</a>
                                <a href="#" class="footer-link">Retours</a>
                                <a href="#" class="footer-link">Garantie</a>
                            </div>
                        </div>
                        <div class="footer-section">
                            <h3>Contact</h3>
                            <div class="footer-links">
                                <a href="mailto:contact@lisseurelegance.com" class="footer-link">contact@lisseurelegance.com</a>
                                <a href="tel:+33123456789" class="footer-link">+33 1 23 45 67 89</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 Lisseur Élégance. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);