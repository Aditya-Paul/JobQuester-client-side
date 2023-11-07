

const Blog = () => {
    return (
        <div className="pt-5  mx-6">
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Q1. What is an access token and refresh token?
                </div>
                <div className="collapse-content">
                    <p>
                        <p className="text-xl">Access Token:</p>
                        <br />
                        An access token is a compact, self-contained token that is used for securely transmitting information between parties. JWTs are often employed in authentication and authorization processes, particularly in web applications and APIs.


                        <br />
                        <p className="text-xl">Refresh Token:</p>
                        <br />
                        A refresh token in the context of JWT (JSON Web Token) is like a special key that allows you to get a new access token whenever your current access token expires, without needing to log in or provide your credentials again. Its a long-lasting key that helps keep you signed in and access protected areas for an extended period.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Q2. How do they work and where should we
                    store them on the client-side?

                </div>
                <div className="collapse-content">
                    <p>
                        <p className="text-xl">Access Token work method:</p>
                        <br />
                        When a user logs in or authorizes an application, they receive an access token. This token is like a temporary key that allows the user or application to access specific resources or services.
                        <p className="text-xl">Refresh token work method:</p>
                        <br />
                        Along with the access token, the authorization server issues a refresh token.The refresh token is a long-lasting key thats used to request a new access token when the current one expires.
                        <br />
                        <p className="text-xl">Access Token store method:</p>
                        <br />
                        Access tokens are short-lived and can be stored in a client-side storage mechanism like browser cookies or local storage.
                        <p className="text-xl">Refresh token store method:</p>
                        <br />
                        Refresh tokens are sensitive and should be stored securely. They are typically stored in HTTP-only cookies or in secure HTTP headers. Using HTTP-only cookies helps protect refresh tokens from client-side JavaScript and makes them less vulnerable to XSS attacks..
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Q3. What is express js?
                </div>
                <div className="collapse-content">
                    <p>Express.js is a web application framework for Node.js that makes it easier to build and manage web applications. It provides a set of tools and features that simplify tasks like handling web requests, creating routes, and managing responses, allowing developers to build web applications more quickly and efficiently. </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Q4.  What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>
                        Nest.js is like a helpful toolbox for building web applications and services using JavaScript (or TypeScript) and Node.js. It provides a set of tools and guidelines that make it easier to create organized, efficient, and maintainable server-side software, like web APIs and backend services. Think of it as a framework that simplifies the process of building web applications in a structured and efficient way.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Q5. Explain your code?
                </div>
                <div className="collapse-content">
                    <p>Done some responsive layout.</p>
                    <p>Done some Firebase authentication.</p>
                    <p>Done some store and fetch data from MongoDb.</p>
                    <p>Done some query filter.</p>
                    <p>Use React-to-Pdf, datapicker, react-tab package for some beautification and less code.</p>
                    <p>Use JWT for token create , set and verification.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;