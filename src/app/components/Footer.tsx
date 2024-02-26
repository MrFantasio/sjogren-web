const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-slate-600 text-white py-6">
      <address className="flex flex-col not-italic">
        <ul className="flex flex-col gap-4 justify-center items-center text-sm">
          <h3 className=" text-amber-500 text-xl">Kontakt</h3>
          <li>Tel: 073 - 92 83 188</li>
          <li>Mail: <a href="mailto:helena.sjogren@gmail.com" className="hover:text-black">helena.sjogren@gmail.com</a></li>
          <li>Skedagatan 1E, 582 37 Linköping</li>
        </ul>
      </address>
    </footer>
  );
};

export default Footer;
