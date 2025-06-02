const JoinUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Join Us</h1>
      <p className="text-lg mb-8">We are excited to have you here! Please fill out the form below to join our community.</p>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded" required />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}
export default JoinUsPage;