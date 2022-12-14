import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes, Route, Navigate,useRoutes} from 'react-router-dom';
import Principal from './componentes/paginas/principal';
import Administrador from './componentes/gestionar/gestionarUsuario'
import TablaUsuarios from './componentes/tablas/tablaUsuarios'
import TablaEmpleados from './componentes/tablas/tablaEmpleados';
import InsertarUsuario from './componentes/insertar/usuario'
import InsertarEmpleado from './componentes/insertar/empleado'
import Usuario from './componentes/gestionar/gestionarClientes'
import TablaClientes from './componentes/tablas/tablaClientes'
import TablaAutomiviles from './componentes/tablas/tablaVehiculos'
import RegistroIngreso from './componentes/insertar/ingresos'
import RegistroCliente from './componentes/insertar/cliente'
import EditarUsuario from './componentes/modificar/usuario'
import EditarEmpleado from './componentes/modificar/empleado'
import Vehiculos from './componentes/insertar/vehiculos'
import EditarCliente from './componentes/modificar/clientes'
import Productos from './componentes/insertar/productos'
import TablaProductos from './componentes/tablas/tablaProductos'
import EditarProductos from './componentes/modificar/producto'
import Reportes from './componentes/tablas/reportes'

function App() {
  return(
    <Router>
      <Routes>
          <Route path="/" element={<Principal/>}/>
            <Route path="/logeo" element={<Administrador/>}>
                <Route index element={<TablaUsuarios/>}></Route>
                <Route path='empleados' element={<TablaEmpleados/>}></Route>  
                <Route path='insertuser' element={<InsertarUsuario/>}></Route>
                <Route path="empleados/insertEmp" element={<InsertarEmpleado/>}></Route>
                <Route path="editar/:id" element={<EditarUsuario/>}></Route>
                <Route path="empleados/editar/:id" element={<EditarEmpleado/>}></Route>
            </Route>
            <Route path="/gestionar" element={<Usuario/>}> 
                <Route index element={<TablaClientes/>}></Route>
                <Route path="registroIngreso" element={<RegistroIngreso/>}></Route>
                <Route path="insertCli" element={<RegistroCliente/>}></Route>
                <Route path="automoviles/:id" element={<Vehiculos/>}></Route>
                <Route path="productos" element={<TablaProductos/>}></Route>
                <Route path="editar/:id" element={<EditarCliente/>}></Route>
                <Route path="productos/registrarProductos" element={<Productos/>}></Route>
                <Route path="productos/editar/:id" element={<EditarProductos/>}></Route>
                <Route path="reportes" element={<Reportes/>}></Route>
                <Route path="factura" element={<Reportes/>}></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default App;
