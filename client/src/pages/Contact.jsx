export default () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: 'channaka.sajith@gmail.com',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: '+94 70 587 1797',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: 'Matale, Central Province, Sri Lanka',
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target); // Get form data
    const name = formData.get('fullName');
    const email = formData.get('email');
    const message = formData.get('message');

    // Send data to backend using fetch or Axios library
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Your message has been sent successfully!');
      // Clear the form after successful submission (optional)
      event.target.reset();
    } else {
      alert('Error submitting the form. Please try again later.');
    }
  };

  return (
    <main className="pt-20 pb-16">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-yellow-600 font-semibold">Contact</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let's connect
            </p>
            <p>
              I am here to help and answer any question you might have, I'm
              looking forward to hearing from you! Please fill out the form, or
              use the contact information below.
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-gray-400">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form
              action="/api/contact"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg"
                />
              </div>

              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-orange-600 hover:bg-orange-500 active:bg-orange-600 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
