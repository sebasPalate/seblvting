import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

export default function NavbarComponent() {
    return (
        <div className="fixed top-0 w-full">
            <Navbar
                isBlurred={false}
                maxWidth="xl">

                <NavbarContent justify="start">
                    <NavbarBrand>
                        <p className="font-semibold text-inherit">Levting</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent justify="end" className="font-semibold gap-10">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Work
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
}