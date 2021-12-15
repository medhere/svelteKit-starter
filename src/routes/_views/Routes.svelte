<!-- svelte-spa-router -->

<script>
import Router,{link, push, pop, replace, location, querystring } from 'svelte-spa-router';
import {wrap} from 'svelte-spa-router/wrap';

import Home from "./hash_routes/Home.svelte";
import Admin from "./hash_routes/Admin.svelte";
import Params from "./hash_routes/Params.svelte";
import NotFound from "./hash_routes/NotFound.svelte";

var user=false


var routes = {
    '/': Home,
    '/admin': Admin,
    '/admin/*': Admin,
    '/params/:first/:last?': Params,
    '/user':wrap({
        asyncComponent: () => import('./hash_routes/User.svelte'),
        // loadingComponent: Loading,
        // component: User,
        props: {foo: 'bar'},
        conditions:[
             (detail) => {
                if (user==false) replace('/');
                // detail.{route,location,querystring,userData,params}                
                return false
            }
        ]
    }),
   '*': NotFound,
}

$: params= new URLSearchParams($querystring);

</script>

<ul>
    <li><a href use:link={{href: '/', disabled: false}}>Home</a></li>
    <li><a href use:link={'/admin'}>Admin</a></li>
    <li><a href="#/user">User</a></li>
    <li><a href="#/params/mike/john">Params1</a></li>
    <li><a href="#/params/mike/">Params2</a></li>
    <li><a href="#/params/john?name=hahah&sex=male">Query</a></li>
    <li><a href="#/does/not/exist">Not found</a></li>
    <li><button on:click={()=>{push('/link1')}}>go to link1</button></li>
</ul>
<p>The current page is: {$location}</p>
<p>The querystring is: {$querystring}</p>

<Router routes={routes} prefix="" restoreScrollState={true}/>
