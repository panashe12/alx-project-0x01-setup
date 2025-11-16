const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-center py-4 mt-10 border-t">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} ALX Project. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
