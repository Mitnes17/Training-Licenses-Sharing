import { Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Licenses from '../pages/Licenses'
import Users from '../pages/Users'
import Requests from '../pages/Requests'
import AddLicense from '../pages/Licenses/AddLicense'

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/users" element={<Users />}></Route>

      <Route path="/licenses" element={<Licenses />}></Route>
      <Route path="/licenses/add" element={<AddLicense />}></Route>

      <Route path="/requests" element={<Requests />}></Route>
      <Route path="*" element={<Navigate to="/dashboard" />}></Route>
    </Routes>
  )
}

export default AppRoutes
