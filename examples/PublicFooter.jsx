export default function PublicFooter() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-600">
          ©{new Date().getFullYear()} by Lolek Productions
        </p>
      </div>
    </footer>
  );
}
