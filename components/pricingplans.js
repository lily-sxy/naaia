
import { useRouter } from 'next/navigation';

export default function Plans(){
    const router = useRouter()

    return(
        <div className="space-y-8 mt-10 mx-16 lg:grid lg:grid-cols-3 gap-0 lg:space-y-0">
            <div className = "flex flex-col w-4/5 max-w-lg p-6 mx-auto text-center text-indigo-600 bg-white border border-gray-100 rounded-2xl shadow-2xl 600 xl:p-8">
                <h3 className="mb-4 text-2xl font-semibold"> Student Plan</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-indigo-400">Best option for Student use</p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$15</span>
                    <span className="text-gray-500 dark:text-gray-400">/year</span>
                </div>
                <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span>Voting in general meetings</span>
                    </li>
                </ul>

                <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span>eligibility to hold office</span>
                    </li>
                </ul>

                <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span>participation in association events</span>
                    </li>
                </ul>
                <a href="/sign-up/confirm" 
                className="border-2 border-indigo-500 text-indigo-500 rounded-full px-12 py-2 inline-block mt-3 font-semibold hover:bg-indigo-500 hover:text-white">
                    Select
                </a>

            </div>

            <div className = "flex flex-col w-4/5 max-w-lg p-6 mx-auto text-center text-indigo-600 bg-white border border-gray-100 rounded-2xl shadow-2xl 600 xl:p-8">
                <h3 className="mb-4 text-2xl font-semibold"> Regular Plan</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-indigo-400">Best option for personal use</p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$30</span>
                    <span className="text-gray-500 dark:text-gray-400">/year</span>
                </div>
                <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span>Voting in general meetings</span>
                    </li>
                </ul>

                <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span>eligibility to hold office</span>
                    </li>
                </ul>

                <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span>participation in association events</span>
                    </li>
                </ul>
                <a 
                href="/sign-up/confirm" 
                className="border-2 border-indigo-500 text-indigo-500 rounded-full px-12 py-2 inline-block mt-3 font-semibold hover:bg-indigo-500 hover:text-white"
                >
                    Select
                </a>

            </div>

            <div className = "flex flex-col w-4/5 max-w-lg p-6 mx-auto text-center text-indigo-600 bg-white border border-gray-100 rounded-2xl shadow-2xl 600 xl:p-8">
                <h3 className="mb-4 text-2xl font-semibold"> Coperation Plan</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-indigo-400">Best option for Coperate</p>
                <div className="flex items-baseline justify-center my-8">
                    <span className="mr-2 text-5xl font-extrabold">$100</span>
                    <span className="text-gray-500 dark:text-gray-400">/year</span>
                </div>
                <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span>Voting in general meetings</span>
                    </li>
                </ul>

                <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span>eligibility to hold office</span>
                    </li>
                </ul>

                <ul className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span>participation in association events</span>
                    </li>
                </ul>
                <a href="/sign-up/confirm" 
                className="border-2 border-indigo-500 text-indigo-500 rounded-full px-12 py-2 inline-block mt-3 font-semibold hover:bg-indigo-500 hover:text-white"
                >
                    Select
                </a>

            </div>
            
        </div>
    )
}