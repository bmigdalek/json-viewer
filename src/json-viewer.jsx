import React, { useState } from 'react';
import { ChevronRight, AlertCircle, Copy, Check } from 'lucide-react';

const JSONViewer = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const handleJsonChange = (e) => {
    const value = e.target.value;
    setJsonInput(value);

    if (!value.trim()) {
      setParsedData(null);
      setError('');
      return;
    }

    try {
      const parsed = JSON.parse(value);
      setParsedData(parsed);
      setError('');
    } catch (err) {
      setError(err.message);
      setParsedData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-light tracking-tight text-slate-900">
            JSON Viewer
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Wklej JSON i przejrzyj strukturę danych
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-8 lg:gap-12">
          {/* Input Panel */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 mb-3">
              Wklej JSON
            </label>
            <textarea
              value={jsonInput}
              onChange={handleJsonChange}
              placeholder='{ "example": "value" }'
              className="flex-1 p-4 bg-white border border-slate-200 rounded-lg font-mono text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-none shadow-sm transition-all"
            />
            {error && (
              <div className="mt-3 flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-red-700">
                  <strong>Błąd:</strong> {error}
                </div>
              </div>
            )}
          </div>

          {/* Output Panel */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-slate-700 mb-3">
              Struktura
            </label>
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 overflow-auto shadow-sm">
              {parsedData ? (
                <JSONTree data={parsedData} />
              ) : (
                <p className="text-sm text-slate-400 italic">
                  {jsonInput.trim() ? 'Poczekaj na poprawny JSON...' : 'Wynik pojawi się tutaj'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const JSONTree = ({ data, depth = 0 }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isExpandable = (value) => {
    return (typeof value === 'object' && value !== null);
  };

  const renderValue = (value, key) => {
    if (value === null) {
      return <span className="text-slate-500">null</span>;
    }

    if (typeof value === 'boolean') {
      return <span className="text-amber-600 font-medium">{value.toString()}</span>;
    }

    if (typeof value === 'number') {
      return <span className="text-emerald-600 font-medium">{value}</span>;
    }

    if (typeof value === 'string') {
      return <span className="text-blue-600">"{value}"</span>;
    }

    if (Array.isArray(value)) {
      return (
        <JSONTreeItem
          itemKey={key}
          value={value}
          isArray={true}
          isExpanded={expanded[key]}
          onToggle={() => toggleExpand(key)}
          depth={depth}
        />
      );
    }

    if (typeof value === 'object') {
      return (
        <JSONTreeItem
          itemKey={key}
          value={value}
          isArray={false}
          isExpanded={expanded[key]}
          onToggle={() => toggleExpand(key)}
          depth={depth}
        />
      );
    }
  };

  if (Array.isArray(data)) {
    return (
      <div className="space-y-1">
        <div className="text-slate-600 font-mono text-sm">
          <span className="text-slate-400">[</span>
        </div>
        <div className="pl-6 space-y-1">
          {data.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              {isExpandable(item) ? (
                renderValue(item, `array-${index}`)
              ) : (
                <>
                  <span className="text-slate-400 font-mono text-sm flex-shrink-0">{index}:</span>
                  <div className="text-slate-800 font-mono text-sm">
                    {renderValue(item, null)}
                  </div>
                </>
              )}
              {index < data.length - 1 && (
                <span className="text-slate-400 font-mono text-sm">,</span>
              )}
            </div>
          ))}
        </div>
        <div className="text-slate-600 font-mono text-sm">
          <span className="text-slate-400">]</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <div className="text-slate-600 font-mono text-sm">
        <span className="text-slate-400">{'{'}</span>
      </div>
      <div className="pl-6 space-y-1">
        {Object.entries(data).map(([key, value], index, arr) => (
          <div key={key} className="flex items-start gap-2 group">
            <span className="text-slate-500 font-mono text-sm flex-shrink-0">"{key}":</span>
            <div className="flex-1">
              {renderValue(value, key)}
            </div>
            {index < arr.length - 1 && (
              <span className="text-slate-400 font-mono text-sm">,</span>
            )}
          </div>
        ))}
      </div>
      <div className="text-slate-600 font-mono text-sm">
        <span className="text-slate-400">{'}'}</span>
      </div>
    </div>
  );
};

const JSONTreeItem = ({ itemKey, value, isArray, isExpanded, onToggle, depth }) => {
  const itemCount = Array.isArray(value) ? value.length : Object.keys(value).length;

  return (
    <div className="space-y-1">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 p-1 hover:bg-slate-100 rounded transition-colors group cursor-pointer"
      >
        <ChevronRight
          className={`w-4 h-4 text-slate-400 transition-transform ${
            isExpanded ? 'rotate-90' : ''
          }`}
        />
        <span className="text-slate-500 font-mono text-sm">{itemKey}:</span>
        <span className="text-slate-400 font-mono text-xs">
          {isArray ? `[${itemCount}]` : `{${itemCount}}`}
        </span>
      </button>

      {isExpanded && (
        <div className="pl-6 space-y-1 border-l border-slate-200">
          {isArray ? (
            value.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                {typeof item === 'object' && item !== null ? (
                  <JSONTree data={item} depth={depth + 1} />
                ) : (
                  <>
                    <span className="text-slate-400 font-mono text-sm flex-shrink-0">{index}:</span>
                    <div className="text-slate-800 font-mono text-sm">
                      {item === null && <span className="text-slate-500">null</span>}
                      {typeof item === 'boolean' && (
                        <span className="text-amber-600 font-medium">{item.toString()}</span>
                      )}
                      {typeof item === 'number' && (
                        <span className="text-emerald-600 font-medium">{item}</span>
                      )}
                      {typeof item === 'string' && (
                        <span className="text-blue-600">"{item}"</span>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))
          ) : (
            Object.entries(value).map(([key, val]) => (
              <div key={key} className="flex items-start gap-2">
                <span className="text-slate-500 font-mono text-sm flex-shrink-0">"{key}":</span>
                <div className="flex-1">
                  {typeof val === 'object' && val !== null ? (
                    isArray ? (
                      val.length ? (
                        <JSONTree data={val} depth={depth + 1} />
                      ) : (
                        <span className="text-slate-400 font-mono text-sm">[]</span>
                      )
                    ) : (
                      Object.keys(val).length ? (
                        <JSONTree data={val} depth={depth + 1} />
                      ) : (
                        <span className="text-slate-400 font-mono text-sm">{'{}'}</span>
                      )
                    )
                  ) : (
                    <>
                      {val === null && <span className="text-slate-500">null</span>}
                      {typeof val === 'boolean' && (
                        <span className="text-amber-600 font-medium">{val.toString()}</span>
                      )}
                      {typeof val === 'number' && (
                        <span className="text-emerald-600 font-medium">{val}</span>
                      )}
                      {typeof val === 'string' && (
                        <span className="text-blue-600">"{val}"</span>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default JSONViewer;
