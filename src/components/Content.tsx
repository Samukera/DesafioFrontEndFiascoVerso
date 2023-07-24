import Card from "./Card";

export default function Content(){
    return (
        <>
    <div className="flex flex-col justify-center items-center lg:hidden">
        <Card />
        <Card />
    </div>
    <div className="hidden lg:flex justify-center items-center">
        <Card />
    </div>
    </>
);
}