import { Link } from "next-view-transitions";
import { highlight } from "sugar-high";

export const components = {
  hr: (props) => (
    <hr className="border-gray-300 dark:border-gray-600 my-8" {...props} />
  ),
  h1: (props) => (
    <h1
      className="text-3xl text-gray-900 dark:text-gray-100 font-semibold mb-4 mt-8 first:mt-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-2xl mt-8 mb-4 first:mt-0" {...props} />
  ),
  h3: (props) => (
    <h3
      className="text-gray-900 dark:text-gray-100 font-semibold text-xl mt-6 mb-3"
      {...props}
    />
  ),
  h4: (props) => (
    <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-lg mt-4 mb-2" {...props} />
  ),
  h5: (props) => (
    <h5 className="text-gray-900 dark:text-gray-100 font-semibold text-base mt-3 mb-2" {...props} />
  ),
  h6: (props) => (
    <h6 className="text-gray-900 dark:text-gray-100 font-medium text-sm mt-2 mb-1" {...props} />
  ),
  p: (props) => (
    <p
      className="text-gray-700 dark:text-gray-300 font-normal mb-4 leading-relaxed"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-6 space-y-2 mb-6 marker:text-gray-600 dark:marker:text-gray-400"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-6 space-y-2 mb-6 marker:text-gray-600 dark:marker:text-gray-400"
      {...props}
    />
  ),
  li: (props) => (
    <li className="text-gray-700 dark:text-gray-300 leading-relaxed font-normal" {...props} />
  ),
  em: (props) => <em className="font-medium italic text-gray-800 dark:text-gray-200" {...props} />,
  strong: (props) => (
    <strong
      className="text-gray-900 dark:text-gray-100 font-semibold"
      {...props}
    />
  ),
  a: ({ href, children, ...props }) => {
    const className =
      "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 underline decoration-indigo-300 dark:decoration-indigo-500 underline-offset-2 hover:decoration-indigo-500 dark:hover:decoration-indigo-300 font-medium";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }) => {
    const codeHTML = highlight(children);
    return (
      <code 
        className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded-md text-sm font-mono border border-gray-200 dark:border-gray-700"
        dangerouslySetInnerHTML={{ __html: codeHTML }} 
        {...props} 
      />
    );
  },
  pre: (props) => (
    <pre 
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono my-6 border border-gray-200 dark:border-gray-700 shadow-sm"
      {...props} 
    />
  ),
  Table: ({ data }) => (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            {data.headers.map((header, index) => (
              <th 
                key={index} 
                className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-gray-100 font-semibold text-sm"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="even:bg-gray-50 dark:even:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/30 transition-colors duration-200">
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300 text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: (props) => (
    <blockquote
      className="ml-0 border-l-4 border-indigo-300 dark:border-indigo-500 pl-6 py-4 my-8 bg-indigo-50 dark:bg-indigo-900/20 text-gray-700 dark:text-gray-300 italic rounded-r-lg shadow-sm"
      {...props}
    />
  ),
  // Additional components for better content structure
  section: (props) => (
    <section className="mb-8" {...props} />
  ),
  article: (props) => (
    <article className="prose max-w-none" {...props} />
  ),
  aside: (props) => (
    <aside className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-6 text-sm" {...props} />
  ),
  // Custom components for special formatting
  Note: ({ children, type = "info" }) => {
    const typeStyles = {
      info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200",
      warning: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200",
      error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700 text-red-800 dark:text-red-200",
      success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200"
    };
    
    return (
      <div className={`border rounded-lg p-4 my-6 ${typeStyles[type]}`}>
        {children}
      </div>
    );
  },
  // Code block with title
  CodeBlock: ({ title, children, language }) => (
    <div className="my-6">
      {title && (
        <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-t-lg border-b border-gray-300 dark:border-gray-600">
          {title}
        </div>
      )}
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-b-lg overflow-x-auto text-sm font-mono border border-gray-200 dark:border-gray-700 border-t-0">
        <code>{children}</code>
      </pre>
    </div>
  ),
  // Image with caption
  Figure: ({ src, alt, caption, ...props }) => (
    <figure className="my-8">
      <img 
        src={src} 
        alt={alt} 
        className="w-full rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
        {...props}
      />
      {caption && (
        <figcaption className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  ),
};

export const useMDXComponents = () => {
  return components;
};