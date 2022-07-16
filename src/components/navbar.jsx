import { Navbar, Avatar } from "flowbite-react";

export default function Nav() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <div className="flex flex-wrap gap-2">
            <Avatar img="https://www.github.com/all4x.png" rounded={true} bordered={true} />
          </div>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Álex
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="https://wa.me/5563992084934">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
