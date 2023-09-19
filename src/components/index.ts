import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import TextInput from "components/Forms/Inputs/TextInput";
import RectangleButton from "components/Buttons/RectangleButton/RectangleButton";
import DefaultButton from "components/Buttons/DefaultButton";
import RippleButton from "./Buttons/RiffleButton/RippleButton";
import Nav from "components/Nav/Nav";

const Forms = { TextInput };
const Layout = { Header, Footer, Nav };
const Buttons = { RectangleButton, DefaultButton, RippleButton };

export { Layout, Forms, Buttons };
