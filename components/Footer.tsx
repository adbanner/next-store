import BackToTop from "@/components/BackToTop"

const Footer = () => {
    return (
        <>
        <div className="footer-div">
            <BackToTop />
            <footer className="footer ">
                <div className="flex justify-center gap-20">
                    <div>
                        <div className="footer-nav-title">Get to Know Us</div>
                        <div className="footer-nav-col">
                            <li>Careers</li>
                            <li>About Us</li>
                            <li>UK Modern Slavery Statement</li>
                            <li>Sustainability</li>
                            <li>Store Science</li>
                        </div>
                    </div>
                    <div>
                        <div className="footer-nav-title">Make Money with Us</div>
                        <div className="footer-nav-col">
                            <li>Sell on Store</li>
                            <li>Sell on Store Business</li>
                            <li>Sell on Store Handmade</li>
                            <li>Sell on Store Launchpad</li>
                            <li>Supply to Store</li>
                            <li>Protect and build your brand</li>
                        </div>
                    </div>
                    <div>
                        <div className="footer-nav-title">Store Payment Methods</div>
                        <div className="footer-nav-col">
                            <li>Instalments by Barclays</li>
                            <li>Store Platinum Mastercard</li>
                            <li>Store Classic Mastercard</li>
                            <li>Store Business Amex Card</li>
                            <li>Gift Cards</li>
                            <li>Store Currency Converter</li>
                            <li>Payment Methods Help</li>
                            <li>Shop with Points</li>
                            <li>Top Up Your Account</li>
                        </div>
                    </div>
                    <div>
                        <div className="footer-nav-title">Let Us Help You</div>
                        <div className="footer-nav-col">
                            <li>Track Packages or View Orders</li>
                            <li>Delivery Rates & Policies</li>
                            <li>Store Prime</li>
                            <li>Returns & Replacements</li>
                            <li>Recycling</li>
                            <li>Manage Your Content and Devices</li>
                            <li>Recalls and Product Safety Alerts</li>
                            <li>Store Mobile App</li>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
};

export default Footer
