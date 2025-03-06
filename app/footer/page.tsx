const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      <div className="container mx-auto">
        <p>&copy; 2025 SUBA CORP. All rights reserved.</p>
        <p className="mt-2">
          <a
            href="/terms"
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
