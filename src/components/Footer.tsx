function Footer() {
  return (
    <footer id="contact" className="bg-surface border-t border-neutral-800 mt-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-white font-bold text-lg">Dev Stack</h2>
            <p className="text-textSecondary text-sm mt-3 max-w-xs">
              A place for developers to explore technologies and build their
              own stack.
            </p>
            <div className="flex gap-4 mt-4 text-sm">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-textSecondary hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm">Product</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-textSecondary">
              <li><a href="#" className="hover:text-white">Technologies</a></li>
              <li><a href="#" className="hover:text-white">Your Stack</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm">Company</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-textSecondary">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm">Legal</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-textSecondary">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-textSecondary">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
