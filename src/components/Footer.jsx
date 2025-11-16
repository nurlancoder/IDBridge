import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Features', path: '/features' },
      { name: 'Solutions', path: '/solutions' },
    ],
    legal: [
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Cookie Policy', path: '/cookies' },
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'FAQ', path: '/faq' },
    ],
  }

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
      href: '#',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      href: '#',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      href: '#',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.557-1.737 1.11-.238.58-.31 1.258-.324 2.057-.013.88-.03 1.203-.03 3.849v.085c0 2.5.017 2.844.03 3.849.014.799.086 1.477.324 2.057.233.553.762 1.065 1.737 1.11 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.557 1.737-1.11.238-.58.31-1.258.324-2.057.013-.88.032-1.204.032-3.849v-.085c0-2.5-.017-2.844-.032-3.849-.014-.799-.086-1.477-.324-2.057-.233-.553-.762-1.065-1.737-1.11C15.75 3.81 15.43 3.8 12.234 3.8h-.468zm4.13 10.803c0 1.174-.951 2.126-2.126 2.126-1.174 0-2.126-.952-2.126-2.126 0-1.174.952-2.126 2.126-2.126 1.175 0 2.126.952 2.126 2.126zm4.126-4.239c-.103-.213-.512-.443-1.102-.593-.59-.15-1.433-.175-2.477-.175s-1.887.025-2.477.175c-.59.15-.999.38-1.102.593a1.177 1.177 0 00-.17.774c.025.177.1.36.22.53.12.17.287.316.49.42.202.102.43.15.66.15.23 0 .458-.048.66-.15.203-.104.37-.25.49-.42.12-.17.195-.353.22-.53a1.177 1.177 0 00-.17-.774zm-5.421 3.554c-1.87 0-3.387-1.517-3.387-3.387S8.518 9.332 10.388 9.332s3.387 1.517 3.387 3.387-1.517 3.387-3.387 3.387zm5.5-3.387c0 .31-.013.618-.037.924-.024.31-.06.618-.12.924-.06.31-.144.618-.25.903a3.178 3.178 0 01-.68 1.064 3.178 3.178 0 01-1.064.68c-.285.106-.593.19-.903.25-.306.06-.614.096-.924.12-.306.024-.614.037-.924.037s-.618-.013-.924-.037c-.31-.024-.618-.06-.924-.12-.31-.06-.618-.144-.903-.25a3.178 3.178 0 01-1.064-.68 3.178 3.178 0 01-.68-1.064c-.106-.285-.19-.593-.25-.903-.06-.306-.096-.614-.12-.924-.024-.306-.037-.614-.037-.924s.013-.618.037-.924c.024-.31.06-.618.12-.924.06-.31.144-.618.25-.903.15-.285.35-.54.68-1.064.33-.524.593-.914 1.064-1.064.285-.106.593-.19.903-.25.306-.06.614-.096.924-.12.306-.024.614-.037.924-.037s.618.013.924.037c.31.024.618.06.924.12.31.06.618.144.903.25.524.15.914.54 1.064 1.064.106.285.19.593.25.903.06.306.096.614.12.924.024.306.037.614.037.924z" clipRule="evenodd" />
        </svg>
      ),
      href: '#',
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">BizScore</span>
            </Link>
            <p className="text-primary-400 mb-6 max-w-md">
              AI-Based Alternative Credit Score for Small Businesses. Empowering businesses with innovative credit assessment solutions.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} BizScore. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
