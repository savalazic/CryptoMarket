export const isEmailValid = email => /^[\w0-9.!#$%&'*+/=?^_`{|}-]+@((\[[0-9]{1,3}\.[0-9]{1,3}.[0-9]{1,3}\.[0-9]{1,3}])|(([\w\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
  email,
);
