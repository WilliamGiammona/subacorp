const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      <div className="container mx-auto">
        <p>&copy; 2025 SUBA CORPORATION All rights reserved.</p>
        <p className="mt-2">
          <a
            href="https://suba-corp-tou.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700 transition-colors"
          >
            View Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
