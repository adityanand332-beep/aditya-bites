import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {ShoppingBag,MapPin,UserCircle,LogOut,LayoutDashboard} from 'lucide-react';
import {useApp} from '../context/AppContext';
export default function Header(){
 const {user,cart,logout}=useApp();const nav=useNavigate();
 return <header className="topbar"><div className="nav wrap">
  <Link to="/" className="brand"><span className="brand-mark">A</span><span>ADITYA<span className="brand-orange">BITES</span><small>GOOD FOOD. GOOD MOOD.</small></span></Link>
  <div className="delivery-location"><MapPin size={17}/><span><b>Delivering to</b><small>Patna, Bihar</small></span></div>
  <nav><Link to="/">Explore</Link><Link to="/orders">My orders</Link>{user&&['admin','restaurant','delivery'].includes(user.role)&&<Link to="/dashboard"><LayoutDashboard size={16}/> Dashboard</Link>}</nav>
  <div className="nav-actions"><Link className="cart-link" to="/cart"><ShoppingBag size={19}/> Cart <b>{cart.reduce((s,x)=>s+x.quantity,0)}</b></Link>{user?<button className="user-pill" onClick={()=>{logout();nav('/')}}><UserCircle size={18}/>{user.name.split(' ')[0]} <LogOut size={15}/></button>:<Link className="btn btn-dark" to="/login">Sign in</Link>}</div>
 </div></header>
}
