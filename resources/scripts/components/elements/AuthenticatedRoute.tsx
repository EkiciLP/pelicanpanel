import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useStoreState } from '@/state/hooks';
import { Link } from 'react-router-dom';

export default ({ children, ...props }: Omit<RouteProps, 'render'>) => {
    const isAuthenticated = useStoreState((state) => !!state.user.data?.uuid);

    return (
        <Route
            {...props}
            render={({ location }) => {
                if (!isAuthenticated) {
                    window.location.href = "/auth/login"
                    return ""
                }else
                    return children
                }
            }
        />
    );
};
