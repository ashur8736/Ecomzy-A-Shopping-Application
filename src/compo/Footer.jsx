const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ecomzy. All rights reserved.
          </p>
  
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-orange-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition duration-300">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  