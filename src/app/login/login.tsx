'use client'
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'

interface State {
  username: string;
  password: string;
  error: string | null;
}

interface Props {
  onLogin: (username: string, password: string) => void;
  onCreateNewUser: (username: string, password: string) => void;
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    } as Pick<State, keyof State>);
  }

  handleLoginClick = async () => {
    try {
      const { username, password } = this.state;
      await this.props.onLogin(username, password);
      this.setState({
        error: null,
      });
    } catch (error) {
      this.setState({
        error: 'Login failed. Please check your credentials and try again.',
      });
    }
  }

  handleCreateNewUserClick = async () => {
    try {
      const { username, password } = this.state;
      await this.props.onCreateNewUser(username, password);
      this.setState({
        error: null,
      });
    } catch (error) {
      this.setState({
        error: 'Failed to create new user. Please check your input and try again.',
      });
    }
  }

  render() {
    const { username, password, error } = this.state;

    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-scroll bg-[url('/images/background.jpg')] bg-cover">
        <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700"><img src="/images/ushangaLogo.png" alt="Your Logo" className="mx-auto h-12 w-auto" />
</h1>
          <form className="mt-6">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>
            <Link href="/forget" className="text-xs text-blue-600 hover:underline">
              Forget Password?
            </Link>
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-gray-700">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    );
  };
}
export default Login;