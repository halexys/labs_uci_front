export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; {currentYear} Universidad de las Ciencias Informáticas. Todos los derechos reservados</p>
          {/* <p className="mt-2 text-gray-400 text-sm">
            Developed and maintained by Your Company Name
          </p> */}
        </div>
      </div>
    </footer>
  );
}