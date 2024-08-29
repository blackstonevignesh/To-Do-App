import Todo from '../components/Todo';

export default function Home({ initialTodos }) {
  return <Todo initialTodos={initialTodos} />;
}

export async function getServerSideProps() {
  const todos = JSON.parse((typeof window !== 'undefined' && localStorage.getItem('todos')) || '[]');

  return {
    props: {
      initialTodos: todos,
    },
  };
}
