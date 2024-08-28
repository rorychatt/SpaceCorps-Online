import {
    Outlet,
    createRootRoute
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {HeaderSection} from "../components/HeaderSection.tsx";

export const Route = createRootRoute({
    component: RootComponent
})

function RootComponent() {
    return (
        <>
            <HeaderSection/>
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
        </>
    )
}