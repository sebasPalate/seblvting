import { HiMiniArrowUpRight } from 'react-icons/hi2';

interface LinkIconComponentProps {
    title: string;
    urlPage: string;
}

const LinkIconComponent = ({ title, urlPage }: LinkIconComponentProps) => {
    return (
        <div className="flex items-center">
            <HiMiniArrowUpRight size={20} />
            <a href={urlPage}>{title}</a>
        </div>

    );
};

export default LinkIconComponent;
