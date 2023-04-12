import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Regist } from './RegisterForm.styled';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form  onSubmit={handleSubmit} autoComplete="off">
      <Regist >
        Username
        <input type="text" name="name" />
      </Regist>
      <Regist >
        Email
        <input type="email" name="email" />
      </Regist>
      <Regist >
        Password
        <input type="password" name="password" />
      </Regist>
      <button type="submit">Register</button>
    </form>
  );
};