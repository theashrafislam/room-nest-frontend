import { Link, useNavigate } from "react-router";
import Button from "../../components/shared/Button";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
            <div className="max-w-xl text-center">
                {/* 404 */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-teal-700">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-slate-600 leading-7">
                    The page you're looking for doesn't exist or may have been moved.
                    Explore our beautiful stays by returning to the homepage.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/" variant="primary">Back to Home</Button>
                    <Button variant="outline" onClick = {() => navigate(-1)}>Back</Button>
                </div>
            </div>
        </section>
    );
};

export default NotFound;