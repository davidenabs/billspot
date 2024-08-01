import { useRouter } from 'next/navigation';

const useNavigate = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return { navigateTo };
};

export default useNavigate;
