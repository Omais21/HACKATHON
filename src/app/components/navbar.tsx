
const navbar: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-evenly items-center p-4 border-b-2 border-b-purple-600 text-gray-500'>
      <h4 className="hover:cursor-pointer hover:text-purple-600 hover:underline">Plants Plots</h4>
      <h4 className="hover:cursor-pointer hover:text-purple-600 hover:underline">Ceramics</h4>
      <h4 className="hover:cursor-pointer hover:text-purple-600 hover:underline">Tables</h4>
      <h4 className="hover:cursor-pointer hover:text-purple-600 hover:underline">Chairs</h4>
      <h4 className="hover:cursor-pointer hover:text-purple-600 hover:underline">Crockery</h4>
      <h4 className="hover:cursor-pointer hover:text-purple-600 hover:underline">Tablecare</h4>
      <h4 className="hover:cursor-pointer hover:text-purple-600 hover:underline">Cutlery</h4>
    </div>
  );
};

export default navbar;
