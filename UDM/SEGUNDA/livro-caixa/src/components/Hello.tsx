// src/components/hello.tsx

type HelloProps = {
    name: string;
};

export function Hello({ name }: HelloProps) {
    return <h1>Olá, {name}!</h1>;
}
