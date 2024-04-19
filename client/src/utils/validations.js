const regex = /^\d{1,2} \-\ \d{1,2}$/;
const expresionRegular = /^(?=.{1,35}$).+/;
const formatUrl = /^https?:\/\//;

export default function validations(data){
  const errors = {};

  if(!expresionRegular.test(data.name)) errors.nombre = 'La longitud debe ser entre 1 y 35 caracteres.';
  if(!formatUrl.test(data.image)) errors.imagen = 'La url no es valida';
  if(!regex.test(data.height)) errors.altura = 'Invalid format ej (12 - 20)'
  if(!regex.test(data.weight)) errors.peso = 'Invalid format ej (12 - 20)'
  if(!regex.test(data.life_span)) errors.años_vida = 'Invalid format ej (12 - 20)'

  return errors;
}