/* eslint-disable react/prop-types */


const Link = ({route}) => {
    return (
        <div>
            <li className="hover:bg-[#18B3C2] p-[5px] rounded-md "><a  href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;